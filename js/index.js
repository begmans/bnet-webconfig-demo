Vue.config.debug = true;

Vue.use(VueContextMenu);

window.addEventListener("load", function() {
	var app = new Vue({
		el: '#app',
		data: {
			menuData: {},
			colOne: [
				'Message 1',
				'Message 2',
				'Message 3',
			],
			colTwo: [
				'Message a',
				'Message b',
				'Message c'
			],
			colOneBis: [
				'Message 4',
				'Message 5',
				'Message 6',
			],
			colTwoBis: [
				'Message d',
				'Message e',
				'Message f'
			]
		},
		ready: function () {
			var _this = this;
			Vue.vueDragula.eventBus.$on(
				'drop',
				function (args) {
					console.log('drop: ' + args[0]);
				}
			)
			Vue.vueDragula.eventBus.$on(
				'dropModel',
				function (args) {
					console.log('dropModel: ' + args);
				}
			)
		},
		methods: {
			onCtxOpen: function(locals) {
				console.log('open', locals);
				this.menuData = locals;
			},
			onCtxClose: function(locals) {
				console.log('close', locals);
			},
			resetCtxLocals: function() {
				this.menuData = {};
			},
			alertClick: function(e,context) {
				window.alert(context.text);
			},
			logClick: function(e,context) {
				return logger('click')(context);
			}
		}
	});
	function logger(n) {
		var name = 'event:ctx-' + n;
		return console.log.bind(console, name);
	}
});
