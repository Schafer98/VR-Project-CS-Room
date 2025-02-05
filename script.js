<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/1.0.3/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-room-component/dist/aframe-room-component.min.js"></script>
</head>

<body>
	<a-scene>
		<rw-room position="-4 0 -4" material="color:#808080">
			<rw-wall position="8 0 0"></rw-wall>
			<rw-wall position="8 0 8"></rw-wall>
			<rw-wall position="0 0 8"></rw-wall>
			<rw-wall position="0 0 0">
		  		<rw-doorhole id="holeA"></rw-doorhole>
		  		<rw-doorlink from="#holeA" to="#holeB" position="2.5 0 0"></rw-doorlink>
			</rw-wall>
		</rw-room>
		<rw-room position="0 0 -3">
			<rw-wall position=" 1 0 -1" material="color:#787"></rw-wall>
			<rw-wall position=" 1 0  1" material="color:#877">
				<rw-doorhole id="holeB"></rw-doorhole>
			</rw-wall>
			<rw-wall position="-1 0  1" material="color:#878"></rw-wall>
			<rw-wall position="-1 0 -1" material="color:#778"></rw-wall>
		</rw-room>
	</a-scene>
</body>