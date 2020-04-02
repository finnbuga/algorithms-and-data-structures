import { assert } from "chai";
import Graph from "../src/Graph";
import GraphNode from "../src/GraphNode";
import dfs from "../src/DepthFirstSearch";

describe("dfs", () => {
  it("Should work on a generic graph", () => {
    const one: GraphNode<number> = new GraphNode(1);
    const two: GraphNode<number> = new GraphNode(2);
    const three: GraphNode<number> = new GraphNode(3);
    const four: GraphNode<number> = new GraphNode(4);
    const five: GraphNode<number> = new GraphNode(5);
    const six: GraphNode<number> = new GraphNode(6);
    const seven: GraphNode<number> = new GraphNode(7);
    const eight: GraphNode<number> = new GraphNode(8);
    const nine: GraphNode<number> = new GraphNode(9);
    const ten: GraphNode<number> = new GraphNode(10);
    const eleven: GraphNode<number> = new GraphNode(11);

    one.neighbours = [two, three];
    two.neighbours = [one, four, five, six];
    three.neighbours = [one, six, seven];
    four.neighbours = [two, eight];
    five.neighbours = [two, eight, nine];
    six.neighbours = [two, three];
    seven.neighbours = [three];
    eight.neighbours = [four, five];
    nine.neighbours = [five];
    ten.neighbours = [eleven];
    eleven.neighbours = [ten];

    const graph: Graph<number> = new Graph();
    graph.nodes = [
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine,
      ten,
      eleven
    ];

    assert.deepEqual(dfs(graph), [1, 2, 4, 8, 5, 9, 6, 3, 7, 10, 11]);
  });

  it("Should return [] on an empty graph", () => {
    const graph: Graph<number> = new Graph();

    assert.deepEqual(dfs(graph), []);
  });

  it("Should work on a graph with one node", () => {
    const graph: Graph<number> = new Graph();
    graph.nodes = [new GraphNode<any>(1)];

    assert.deepEqual(dfs(graph), [1]);
  });
});
