import GraphNode from "./GraphNode";
import Graph from "./Graph";

export default function dfs(graph: Graph<any>): any[] {
  resetVisitedStatus(graph);

  const values: any[] = dfsOnUnvisitedNodes(graph);

  resetVisitedStatus(graph);

  return values;
}

function resetVisitedStatus(graph: Graph<any>): void {
  for (const node of graph.nodes) {
    node.visited = false;
  }
}

function dfsOnUnvisitedNodes(graph: Graph<any>): any[] {
  const values: any[] = [];

  for (const node of graph.nodes) {
    if (!node.visited) {
      values.push(...dfsOnNode(node));
    }
  }

  return values;
}

function dfsOnNode(node: GraphNode<any>): any[] {
  const values: any[] = [node.value];
  node.visited = true;

  for (const neighbour of node.neighbours) {
    if (!neighbour.visited) {
      values.push(...dfsOnNode(neighbour));
    }
  }

  return values;
}
