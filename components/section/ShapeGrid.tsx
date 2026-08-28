"use client";

import { useEffect, useRef } from "react";
import "./ShapeGrid.css";

interface ShapeGridProps {
    borderColor?: string;
    squareSize?: number;
    hoverFillColor?: string;
    className?: string;
}

const ShapeGrid = ({
    borderColor = "rgba(226, 232, 240, 0.65)",
    squareSize = 40,
    hoverFillColor = "rgba(255, 255, 255, 0.25)",
    className = "",
}: ShapeGridProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const hoveredSquare = useRef<{
        x: number;
        y: number;
    } | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();

            canvas.width = Math.floor(rect.width);
            canvas.height = Math.floor(rect.height);

            drawGrid();
        };

        const drawGrid = () => {
            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

            const cols =
                Math.ceil(
                    canvas.width / squareSize
                ) + 1;

            const rows =
                Math.ceil(
                    canvas.height / squareSize
                ) + 1;

            for (let col = 0; col < cols; col++) {
                for (let row = 0; row < rows; row++) {
                    const x =
                        col * squareSize;

                    const y =
                        row * squareSize;

                    const isHovered =
                        hoveredSquare.current?.x === col &&
                        hoveredSquare.current?.y === row;

                    if (isHovered) {
                        ctx.fillStyle =
                            hoverFillColor;

                        ctx.fillRect(
                            x,
                            y,
                            squareSize,
                            squareSize
                        );
                    }

                    ctx.strokeStyle =
                        borderColor;

                    ctx.strokeRect(
                        x,
                        y,
                        squareSize,
                        squareSize
                    );
                }
            }
        };

        const handleMouseMove = (
            event: MouseEvent
        ) => {
            const rect =
                canvas.getBoundingClientRect();

            const mouseX =
                event.clientX - rect.left;

            const mouseY =
                event.clientY - rect.top;

            const col = Math.floor(
                mouseX / squareSize
            );

            const row = Math.floor(
                mouseY / squareSize
            );

            const current =
                hoveredSquare.current;

            if (
                !current ||
                current.x !== col ||
                current.y !== row
            ) {
                hoveredSquare.current = {
                    x: col,
                    y: row,
                };

                drawGrid();
            }
        };

        const handleMouseLeave = () => {
            hoveredSquare.current = null;

            drawGrid();
        };

        canvas.addEventListener(
            "mousemove",
            handleMouseMove
        );

        canvas.addEventListener(
            "mouseleave",
            handleMouseLeave
        );

        window.addEventListener(
            "resize",
            resizeCanvas
        );

        resizeCanvas();

        return () => {
            window.removeEventListener(
                "resize",
                resizeCanvas
            );

            canvas.removeEventListener(
                "mousemove",
                handleMouseMove
            );

            canvas.removeEventListener(
                "mouseleave",
                handleMouseLeave
            );
        };
    }, [
        borderColor,
        squareSize,
        hoverFillColor,
    ]);

    return (
        <canvas
            ref={canvasRef}
            className={`shapegrid-canvas ${className}`}
        />
    );
};

export default ShapeGrid;