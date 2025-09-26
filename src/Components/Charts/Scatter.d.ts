interface ScatterChartComponentProps {
    data1: {
        x: number;
        y: number;
        id: number;
    }[];
    data2?: {
        x: number;
        y: number;
        id: number;
    }[];
    height?: number;
    width?: number | string;
}
export default function ScatterChartComponent({ data1, data2, height, width, }: ScatterChartComponentProps): import("react/jsx-runtime").JSX.Element;
export {};
