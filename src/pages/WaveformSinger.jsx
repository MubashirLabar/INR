import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { getSingleStory } from '../services/storyService';
import PauseIcon from '../svgIcon/PauseIcon';
import PlayIcon from '../svgIcon/PlayIcon';
import './WaveformSingersss.css';

const formWaveSurferOptions = ref => ({
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

export default function WaveformSinger({ story }) {
	const waveformRef = useRef();
	const wavesurfer = useRef();
	const [waveDisabled, setDisabled] = useState(false);
	const [playing, setPlay] = useState(false);
	const [volume, setVolume] = useState(0.5);
	const [isPause, setPause] = useState(false);
	const [total, setTotal] = useState(0);
	useEffect(() => {
		setPlay(true);
		const audio = document.getElementById('audio');
		const range = document.getElementById('slider');

		audio.addEventListener('timeupdate', e => {
			setTotal(audio.duration);
			if (!isPause) {
				const totalTime = audio.duration;
				const _currentTime = audio.currentTime;
				const progress = _currentTime / totalTime;
				try {
					wavesurfer.current.seekTo(progress);
				} catch (error) {
					console.log(error);
				}
			}
		});
		const options = formWaveSurferOptions(waveformRef.current);
		wavesurfer.current = WaveSurfer.create(options);

		if (story.waveform_data) {
			wavesurfer.current.load(story.audio_url, story.waveform_data.data);
			setVolume(volume);
		} else {
			wavesurfer.current.load(story.audio_url);
		}
		range.addEventListener('change', e => {
			audio.currentTime = range.value;
		});
		//wavesurfer.current.playPause();
		// wavesurfer.current.on('seek', e => {
		// 	console.log(e);
		// 	if (isPause) {
		// 		console.log('pause');
		// 	} else {
		// 		console.log('not paused');
		// 	}
		// });
		setPlay(true);
		wavesurfer.current.on('ready', () => {
			if (wavesurfer.current) {
				wavesurfer.current.setVolume(0);
				setVolume(0);
				setDisabled(false);
			}
		});

		return () => wavesurfer.current.destroy();
	}, []);

	const handlePlayPause = e => {
		const _audio = document.getElementById('audio');
		setPlay(!playing);
		//wavesurfer.current.playPause();
		if (playing) {
			_audio.play();
			setPause(false);
		} else {
			_audio.pause();
			setPause(true);
		}
	};

	return (
		<div className="containers">
			<div className="meta">
				{story?.title && <div className="title">{story.title}</div>}
				{story?.subtitle && <div className="sub-title">{story.subtitle}</div>}
			</div>

			<input type="range" name="" id="slider" min={0} max={total} className="scroll-audio" />
			<div className="audio-wave">
				<div id="waveform" ref={waveformRef} />
			</div>

			<div className="controls">
				{/* eslint-disable-next-line react/button-has-type */}
				<button
					id="btnAudio"
					className={`${waveDisabled ? 'spinner disabled' : 'button'}`}
					onClick={handlePlayPause}
				>
					{!playing ? (
						<div className="icon pause-icon">
							<PauseIcon />
						</div>
					) : (
						<div className="icon play-icon">
							<PlayIcon />
						</div>
					)}
				</button>
			</div>
			<audio id="audio" style={{ opacity: '0' }}>
				<track kind="captions" controls="controls" />
				<source src={story.audio_url} type="audio/ogg" />
				<source src={story.audio_url} type="audio/mpeg" />
				Your browser does not support the audio element.
			</audio>
		</div>
	);
}
