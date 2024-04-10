import styles from '../styles/Home.module.css';
import ReactFlow, {
    applyNodeChanges,
    applyEdgeChanges
} from 'reactflow';
import 'reactflow/dist/style.css';
import {useCallback, useState} from "react";

const initialNodes = [
    {
        id: '1',
        data: { label: 'March 2020' },
        position: { x: 0, y: 0 },
    },
    {
        id: '2',
        data: { label: 'August 2020' },
        position: { x: 0, y: 0 },
    },
];

const initialEdges = [
    { id: '1-2', source: '1', target: '2', type: 'step' },
];

export default function Timeline() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => setNodes(
            (nds) => applyNodeChanges(changes, nds)),
        [],
    );

    const onEdgesChange = useCallback(
        (changes) => setEdges(
            (eds) => applyEdgeChanges(changes, eds)),
        [],
    );

    return (
        <div className={styles.timeline}>
            <ReactFlow
                nodes={nodes}
                onNodesChange={onNodesChange}
                edges={edges}
                onEdgesChange={onEdgesChange}
                proOptions={{ hideAttribution: true }}
                fitView
            >
            </ReactFlow>
        </div>
    );
}

