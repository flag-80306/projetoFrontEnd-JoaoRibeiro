import React, { useEffect, useState } from 'react';

function Test() {
	const [videoUrl, setVideoUrl] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('/mockAPI/mockAPIvideo.json');

				if (!response.ok) {
					throw new Error(`Failed to fetch video data: ${response.status} ${response.statusText}`);
				}

				const data = await response.json();

				if (data.video) {
					setVideoUrl(data.video);
				} else {
					console.error('Video URL not found in the response:', data);
				}
			} catch (error) {
				console.error('Error fetching video data:', error.message);
			}
		};

		fetchData();
	}, []);
	return (
		<div>
			<h1>video</h1>
			{videoUrl && (
				<video controls width='640' height='360'>
					<source src={videoUrl} type='video/mp4' />
					Your browser does not support the video tag.
				</video>
			)}
		</div>
	);
}

export default Test;
