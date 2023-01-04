import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import {getSingleStory} from "../services/storyService";

const formWaveSurferOptions = (ref)=> ({
	container: ref,
	waveColor: '#000000',
	progressColor: '#bababa',
	cursorColor: '#000',
	barWidth: 2,
	barGap: 2,
	barRadius: 0,
	responsive: true,
	height: 160,
	// If true, normalize by the maximum peak instead of 1.0.
	normalize: true,
	// Use the PeakCache to improve rendering speed of large waveforms.
	partialRender: true
});

export default function Waveform({ slug}) {
	const waveformRef = useRef();
	const wavesurfer = useRef();
	const [playing, setPlay] = useState(false);
	const [volume, setVolume] = useState(0.01);
	useEffect(() => {
		setPlay(false);

		const options = formWaveSurferOptions(waveformRef.current);
		wavesurfer.current = WaveSurfer.create(options);

		getSingleStory(slug, response => {
			if (response.waveform_data) {
				wavesurfer.current.load(response.audio_url, response.waveform_data.data);
				setVolume(volume);
			} else {
				wavesurfer.current.load(response.audio_url)
			}
		})

		wavesurfer.current.on('ready', () => {
			if (wavesurfer.current) {
				wavesurfer.current.setVolume(volume);
				setVolume(volume);
			}
		});
		return () => wavesurfer.current.destroy();
	}, [slug]);

	const handlePlayPause = () => {
		setPlay(!playing);
		wavesurfer.current.playPause();
	};
	return (
		<div className='container' >
			<div className="controls">
				{/* eslint-disable-next-line react/button-has-type */}
				<button className='button' onClick={handlePlayPause}>{!playing ? <h1 className='h1p'>&#9658;</h1>: <h1>||</h1>}</button>
			</div>
			<div id="waveform" ref={waveformRef} className='some'/>
		</div>
	)
}
