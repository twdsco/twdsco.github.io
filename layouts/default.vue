<template>
	<v-app>
		<v-app-bar app :flat="appbarDark" :color="appbarDark?'':'primary'" dark>
			<v-app-bar-nav-icon v-show="!$vuetify.breakpoint.mdAndUp" />
			<v-toolbar-title :style="$vuetify.breakpoint.mdAndUp?'padding-left: 32px':''">
				<span>台灣數位串流有限公司</span>
			</v-toolbar-title>
			<v-spacer />
			<v-toolbar-items v-show="$vuetify.breakpoint.mdAndUp">
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
		<v-footer color="primary lighten-1" padless>
			<v-row justify="center" no-gutters>
				<v-btn
					v-for="item in socialLinks"
					:key="item.icon"
					:href="item.link"
					target="_blank"
					class="my-2"
					dark
					color="white"
					icon
				>
					<v-icon size="24px">{{ item.icon }}</v-icon>
				</v-btn>
				<v-col
					class="primary lighten-2 py-4 text-center white--text"
					cols="12"
				>{{ new Date().getFullYear() }} | 台灣數位串流有限公司 | 統編：83569021</v-col>
			</v-row>
		</v-footer>
		<v-snackbar v-model="snackbar.show">{{snackbar.message}}</v-snackbar>
	</v-app>
</template>
<script>
import Vue from "vue";
export default {
	name: "App",
	data: () => ({
		drawer: null,
		appbarDark: true,
		snackbar: {
			show: false,
			message: ``,
			timeout: null
		},
		socialLinks: [
			{ icon: 'mdi-facebook-box', link: '#' },
			{ icon: 'mdi-github-circle', link: '#' },
		],
	}),
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},
	destroyed() {
		window.removeEventListener('scroll', this.handleScroll);
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
		window.addEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll(event) {
			let scrollTop = window.scrollTop;
			let rect = document.querySelector('#banner').getBoundingClientRect()
			let rectAppbar = document.querySelector('header').getBoundingClientRect()
			this.appbarDark = rect.y * -1 < rect.height - rectAppbar.height
		},
	}
};
</script>