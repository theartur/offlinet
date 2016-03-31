Offlinet = {
	target: {
		app: document.querySelector(".app"),
		dbMeter: document.getElementById("db-meter")//,
		// isConnectedToInternetViaWifi: document.getElementById("isConnectedToInternetViaWifi"),
		// getNetConfig: document.getElementById("getNetConfig"),
		// getConnectionInfo: document.getElementById("getConnectionInfo"),
		// startHotspot: document.getElementById("startHotspot"),
		// getSimInfo: document.getElementById("getSimInfo"),
		// exitStatus: document.getElementById("exitStatus"),
		// cmdOutput: document.getElementById("cmdOutput"),
		// socket: document.getElementById("socket"),
		// onAccept: document.getElementById("onAccept"),
		// onAdapterStateChanged: document.getElementById("onAdapterStateChanged"),
		// getServices: document.getElementById("getServices"),
		// initBT: document.getElementById("initBT")
	},
	isConnectedToInternetViaWifi: function (done) {
		Offlinet.api.isConnectedToInternetViaWifi(function () {
			done(true);
		}, function () {
			done(false);
		});
	},
	getNetConfig: function (done) {
		Offlinet.api.getNetConfig(function (info) {
			done(JSON.stringify(info, null, "<br>"));
		}, function (err) {
			done(err);
		});
	},
	getConnectionInfo: function (done) {
		Offlinet.api.getConnectionInfo(function (info) {
			done(JSON.stringify(info, null, "<br>"));
		}, function (err) {
			done(err);
		});
	},
	startHotspot: function (done) {
		Offlinet.api.startHotspot(function (info) {
			done(JSON.stringify(info, null, "<br>"));
		}, function (err) {
			done(err);
		});
	},
	getSimInfo: function (done) {
		window.plugins.sim.requestReadPermission();
		window.plugins.sim.getSimInfo(function (info) {
			done(JSON.stringify(info, null, "<br>"));
		}, function (err) {
			done(err);
		});
	},
	ShellExec: function (command, done) {
		window.ShellExec.exec(command, done);
	},
	initBT: function (done) {

		// function listenBT(done) {
		// 	chrome.bluetoothSocket.create({}, function(socket){
		// 		var socketId = socket.socketId;
		// 		chrome.bluetoothSocket.getInfo(socketId, function(socket){
		// 			console.log("socket", socket);
		// 			Offlinet.target.socket.innerHTML = JSON.stringify(socket, null, "<br>");
		// 			chrome.bluetoothSocket.listenUsingRfcomm(socketId, 1105, {}, function(){
		// 				done(socket);
		// 			});
		// 		});
		// 	});
		// }

		// listenBT(function (socket) {
		// 	done(JSON.stringify(socket, null, "<br>"));
		// });

		// chrome.bluetooth.onDeviceAdded.addListener(function(device){
		// 	done(JSON.stringify(device, null, "<br>"));
		// });

		// chrome.bluetooth.startDiscovery(function(){
		// 	setTimeout(function(){ // stopDiscovery after 1 min
		// 		chrome.bluetooth.stopDiscovery(function(){});
		// 	}, 60000);
		// });




		// /*
		// Chrome Packaged app Bluetooth API test
		//  Before interacting with a BT device, you need to : 
		//    1) get the device MAC and service UUID with startDiscovery and getServices methods
		//    2) request permission with chrome.permissions.request
		//    3) add the service profile with chrome.bluetooth.addProfile (a profile is only {uuid:'xxxxxxx...'})
		// */

		// // onAccept callback
		// chrome.bluetoothSocket.onAccept.addListener(
		// function(socket) {
		// 	console.log('onAccept:', socket);
		// 	Offlinet.target.onAccept.innerHTML += JSON.stringify(socket, null, "<br>");
		// 	chrome.bluetoothSocket.read({
		// 		socket: socket
		// 	}, function() {
		// 		console.log('BT read:', arguments);
		// 	});
		// 	// chrome.bluetoothSocket.write({
		// 	//     socket: socket,
		// 	//     data: arrayBuffer
		// 	// }, function() {
		// 	//     console.log('write BT', arguments);
		// 	// })
		// });

		// // onAdapterStateChanged callback (wifi card)
		// chrome.bluetooth.onAdapterStateChanged.addListener(function(newStatus) {
		// 	console.log('onAdapterStateChanged:', arguments);
		// 	Offlinet.target.onAdapterStateChanged.innerHTML += newStatus;
		// });

		// // discover devices 
		// chrome.bluetooth.startDiscovery({
		// 	deviceCallback: function(device) {
		// 		console.log('deviceCallback:', device);
		// 		// discover services
		// 		chrome.bluetoothSocket.getServices({
		// 			deviceAddress: device.address
		// 		}, function(services) {
		// 			console.log('getServices:', device.name, arguments);
		// 			Offlinet.target.getServices.innerHTML += JSON.stringify(services, null, "<br>");
		// 			var service = services[1];
		// 			// try to connect to service
		// 			// Wii service name is "Nintendo RVL-CNT-01"
		// 			// chrome.bluetoothSocket.connect({
		// 			// 	deviceAddress: device.address,
		// 			// 	serviceUuid: service.uuid
		// 			// }, function() {
		// 			// 	console.log('connect:', arguments);
		// 			// })
					
		// 		})
		// 	}
		// }, function() {
		// 	console.log('callback', arguments);
		// 	done(JSON.stringify(arguments, null, "<br>"));
		// });

		// // ask permission to access a device
		// chrome.permissions.request({
		// 		permissions: [{
		// 			'bluetoothDevices': [{
		// 				'deviceAddress': address
		// 			}]
		// 		}]
		// 	},
		// 	function(granted) {
		// 		console.log('device granted:', granted);
		// 	}
		// );

		// // add profile to local profiles (needed)
		// chrome.bluetoothSocket.addProfile(profile, function() {
		// 	console.log('profile added', arguments);
		// 	// now you can connect
		// });

		// // GATT Device Information Service UUIDs
		// var DEVICE_INFO_SERVICE_UUID      = '0000180a-0000-1000-8000-00805f9b34fb';
		// var MANUFACTURER_NAME_STRING_UUID = '00002a29-0000-1000-8000-00805f9b34fb';
		// var SERIAL_NUMBER_STRING_UUID     = '00002a25-0000-1000-8000-00805f9b34fb';
		// var HARDWARE_REVISION_STRING_UUID = '00002a27-0000-1000-8000-00805f9b34fb';
		// var FIRMWARE_REVISION_STRING_UUID = '00002a26-0000-1000-8000-00805f9b34fb';
		// var SOFTWARE_REVISION_STRING_UUID = '00002a28-0000-1000-8000-00805f9b34fb';
		// var PNP_ID_UUID                   = '00002a50-0000-1000-8000-00805f9b34fb';

		// chrome.bluetooth.getDevices(function (devices) {
		// 	if (devices) {
		// 		devices.forEach(function (device) {
		// 			// See if the device exposes a Device Information service.
		// 			chrome.bluetoothLowEnergy.getServices(device.address, function (services) {
		// 				if (!services) return;

		// 				var found = false;
		// 				services.forEach(function (service) {
		// 					if (service.uuid == DEVICE_INFO_SERVICE_UUID) {
		// 						console.log('Found Device Information service!');
		// 						found = true;
		// 					}
		// 				});

		// 				if (!found) return;

		// 				console.log('Found device with Device Information service: ' + device.address);
		// 				console.log(device.address, device);
		// 			});
		// 		});
		// 	}
		// });


		chrome.bluetooth.startDiscovery(function(){
			console.log("startDiscovery", arguments)
		});
	},
	initDBMeter: function () {
		DBMeter.start(function(dB){
			var dbScale = dB / 90;

			Offlinet.target.app.style.transform = "scale(" + (dbScale * 2 ) + ")";
			Offlinet.target.dbMeter.innerHTML = dbScale;

		}, function(e){
			console.log('code: ' + e.code + ', message: ' + e.message);
		});
	},
	initHTTPD: function () {
		initHTTPD();
	},
	init: function () {
		Offlinet.api = cordova.plugins.hotspot;

		// Offlinet.isConnectedToInternetViaWifi(function success(isIt) {
		// 	Offlinet.target.isConnectedToInternetViaWifi.innerHTML = isIt;
		// });

		// Offlinet.getNetConfig(function success(info) {
		// 	Offlinet.target.getNetConfig.innerHTML = info;
		// });

		// Offlinet.getConnectionInfo(function success(info) {
		// 	Offlinet.target.getConnectionInfo.innerHTML = info;
		// });

		// // Offlinet.startHotspot(function success(info) {
		// // 	Offlinet.target.startHotspot.innerHTML = info;
		// // });

		// Offlinet.getSimInfo(function success(info) {
		// 	Offlinet.target.getSimInfo.innerHTML = info;
		// });

		// Offlinet.initBT(function success(socket) {
		// 	Offlinet.target.initBT.innerHTML += socket;
		// });

		// Offlinet.ShellExec('pwd', function success(info) {
		// 	Offlinet.target.exitStatus.innerHTML = ('exit status: ' + info.exitStatus);
		// 	Offlinet.target.cmdOutput.innerHTML = ('cmd output: ' + info.output);
		// });

		Offlinet.initHTTPD();
	}
};