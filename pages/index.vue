<template>
	<div>
		<div id="banner">
			<div class="container">
				<img src="/logo/twds_white.svg" class="banner__logo" width="128px" />
				<p class="banner__title">台灣數位串流有限公司</p>
				<p class="banner__subtitle">Taiwan Digital Streaming Co.</p>
			</div>
		</div>
		<div class="container landing__container">
			<section>
				<div class="landing__title">簡介</div>
				<p>發源自開源社群、擁抱，並持續貢獻於開源社群，在注重開源的同時不忘資安上的保護。</p>
			</section>
			<!--<section>
				<div class="landing__title">理念</div>
				<p>尚未完成</p>
			</section>-->
			<section>
				<div class="landing__title">營運項目</div>
				<v-row no-gutters>
					<v-col md="4" cols="6" v-for="item in serviceItems" :key="item.title">
						<div class="service__item">
							<div class="service__item__icon">
								<v-icon>{{item.icon}}</v-icon>
							</div>
							<div
								class="service__item__title"
								v-show="!$vuetify.breakpoint.smAndDown||!item.rwdTitle"
							>{{item.title}}</div>
							<div
								class="service__item__title"
								v-show="$vuetify.breakpoint.smAndDown&&item.rwdTitle"
								v-html="item.rwdTitle"
							></div>
						</div>
					</v-col>
				</v-row>
			</section>
			<section>
				<div class="landing__title">經銷/合作</div>
				<div class="nakama">
					<a
						v-for="item of nakama"
						:key="item.url"
						:href="item.url"
						target="_blank"
						:style="{backgroundImage:`url('${item.img}')`}"
					></a>
				</div>
			</section>
		</div>
	</div>
</template>
<script>
export default {
	data: () => ({
		serviceItems: [
			{ icon: 'mdi-store', title: '網路設備批發/零售', rwdTitle: '網路設備<br/>批發/零售' },
			{ icon: 'mdi-cellphone-link', title: '網頁應用程式開發與維護', rwdTitle: '網頁應用程式<br/>開發與維護' },
			{ icon: 'mdi-android-debug-bridge', title: '系統與設備維護' },
			{ icon: 'mdi-checkbox-marked-circle-outline', title: '應用程式解決方案' },
			{ icon: 'mdi-web', title: '網站代管營運' },
			{ icon: 'mdi-widgets', title: '容器化解決方案' },
		],
		nakama: [
			{ img: "/img/nakama/proxmox.png", url: "https://www.proxmox.com" },
			{ img: "/img/nakama/unitech.svg", url: "https://www.unitech.com.tw/" },

		]
	}),
	destroyed() {
	},
	created() {

	},
	methods: {

	}
};
</script>