import GraphNode from "./GraphNode";
import Graph from "./Graph";
import Queue from "./3.4 QueueViaStack";

export default function bfs(graph: Graph<any>): any[] {
  resetVisitedStatus(graph);

  const values: any[] = bfsOnUnvisitedNodes(graph);

  resetVisitedStatus(graph);

  return values;
}

function resetVisitedStatus(graph: Graph<any>): void {
  for (const node of graph.nodes) {
    node.visited = false;
  }
}

function bfsOnUnvisitedNodes(graph: Graph<any>): any[] {
  const values: any[] = [];
  const queue: Queue<GraphNode<any>> = new Queue();

  for (const node of graph.nodes) {
    if (!node.visited) {
      queue.add(node);
      node.visited = true;
      values.push(...bfsOnNode(queue));
    }
  }

  return values;
}

function bfsOnNode(queue: Queue<GraphNode<any>>): any[] {
  const values: any[] = [];

  while (!queue.isEmpty()) {
    let node = queue.remove();
    values.push(node.value);

    for (const neighbour of node.neighbours) {
      if (!neighbour.visited) {
        queue.add(neighbour);
        neighbour.visited = true;
      }
    }
  }

  return values;
}
