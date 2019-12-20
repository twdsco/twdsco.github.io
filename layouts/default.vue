<template>
	<div>
		<v-app-bar app flat dark>
			<v-toolbar-title style="padding-left: 32px">
				<span>台灣數位串流有限公司</span>
			</v-toolbar-title>
			<v-spacer />
			<v-toolbar-items>
				<v-btn text>首頁</v-btn>
				<v-btn text>簡介</v-btn>
				<v-btn text>理念</v-btn>
				<v-btn text>營運項目</v-btn>
				<v-btn text>自主開發商品</v-btn>
			</v-toolbar-items>
		</v-app-bar>
		<v-content>
			<router-view />
		</v-content>
		<v-snackbar v-model="snackbar.show">{{snackbar.message}}</v-snackbar>
	</div>
</template>
<script>
import Vue from "vue";
export default {
	name: "App",
	data: () => ({
		drawer: null,
		snackbar: {
			show: false,
			message: ``,
			timeout: null
		},
	}),
	destroyed() {
	},
	created() {
		//註冊點心條組件
		Vue.prototype.$snackbar = (msg = ``, duration = 1500) => {
			this.snackbar.message = msg;
			this.snackbar.show = true;
			clearTimeout(this.snackbar.timeout);
			this.snackbar.timeout = setTimeout(
				() => (this.snackbar.show = false),
				duration
			);
		};

	},
	methods: {

	}
};
</script>