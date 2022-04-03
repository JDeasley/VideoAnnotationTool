import React, { useEffect, useState } from "react";
import "../styles/ToolBar.css";
import { BiShapePolygon, BiRectangle } from "react-icons/bi";
import { MdPlayCircleOutline, MdPauseCircleOutline, MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { useTool } from "./AppContext";

const ToolBar = ({ pauseVideo, playVideo, previousFrame, nextFrame, playbackRate, width }) => {
	const [tool, setTool] = useTool();

	return (
		<div className="tool-bar">
			<div className="tool-bar__section">
				<button onClick={() => previousFrame?.()}><MdArrowBackIosNew/></button>
				<button onClick={() => playVideo?.()}><MdPlayCircleOutline/></button>
				<button onClick={() => pauseVideo?.()}><MdPauseCircleOutline/></button>
				<button onClick={() => nextFrame?.()}><MdArrowForwardIos/></button>
				<button onClick={() => playbackRate?.(0.5)}>{"½×"}</button>
				<button onClick={() => playbackRate?.(1)}>{"1×"}</button>
				<button onClick={() => playbackRate?.(2)}>{"2×"}</button>
				<button onClick={() => playbackRate?.(4)}>{"4×"}</button>
			</div>
			<div className="tool-bar__section">
				<button style={{color: tool === 1 ? "#0f62fe" : "white"}}
					onClick={async (e) => {
						setTool(1);
					}}
				>
					<BiShapePolygon></BiShapePolygon>
				</button>
				<button style={{color: tool === 0 ? "#0f62fe" : "white"}}
					onClick={async (e) => {
						setTool(0);
					}}
				>
					<BiRectangle></BiRectangle>
				</button>
			</div>
		</div>
	);
};

export default ToolBar;
