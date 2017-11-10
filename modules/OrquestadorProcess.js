const cluster = require('cluster');
let OrquestadorMessage = require('./OrquestadorMessage');

let OrquestadorProcess = {
	
	handleWorkerMessage: function(obj) {
		if(obj.cmd === OrquestadorMessage.BROADCAST) {
			OrquestadorProcess.broadcast(obj.key, obj.node);
		}
	},
	
	broadcast: function(key, node) {
		//Enviar nueva clave a workers
		for (const id in cluster.workers) {
			cluster.workers[id].send({ cmd: OrquestadorMessage.NEW_KEY, key: key, node: node });
		}
		
		return key;
	},
	
};

module.exports = OrquestadorProcess;