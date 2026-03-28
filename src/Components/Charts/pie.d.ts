interface PieChartComponentProps {
    data?: {
        id: number;
        value: number;
        label: string;
    }[];
    height?: number;
    width?: number | string;
}
export default function PieChartComponent({ data, height, width: widthProp, }: PieChartComponentProps): import("react/jsx-runtime").JSX.Element;
export {};
