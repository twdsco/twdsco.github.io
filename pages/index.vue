<template>
	<div>
		<div id="header">
			<div class="container">
				<p class="header__title">台灣數位串流有限公司</p>
				<p class="header__subtitle">Taiwan Digital Streaming Co.</p>
			</div>
		</div>
		<div class="container landing__container">
			<section>
				<div class="landing__title">簡介</div>
				<p>發源自開源社群、擁抱，並持續貢獻於開源社群，在注重開源的同時不忘資安上的保護。</p>
			</section>
			<section>
				<div class="landing__title">理念</div>
				<p>發大財</p>
			</section>
			<section>
				<div class="landing__title">營運項目</div>
				<v-row class="mb-6" no-gutters>
					<v-col md="4" sm="2">
						<div class="service__item">
							<div class="service__item__icon">
								<v-icon class="outline-gavel"></v-icon>
							</div>
							<div class="service__item__title">網路設備批發/零售</div>
						</div>
					</v-col>
					<v-col md="4" sm="2">
						<div class="service__item">
							<div class="service__item__icon">
								<v-icon class="outline-devices"></v-icon>
							</div>
							<div class="service__item__title">網頁應用程式開發與維護</div>
						</div>
					</v-col>
					<v-col md="4" sm="2">
						<div class="service__item">
							<div class="service__item__icon">
								<v-icon class="outline-adb"></v-icon>
							</div>
							<div class="service__item__title">系統與設備維護</div>
						</div>
					</v-col>
					<v-col md="4" sm="2">
						<div class="service__item">
							<div class="service__item__icon">
								<v-icon class="outline-check"></v-icon>
							</div>
							<div class="service__item__title">應用程式解決方案</div>
						</div>
					</v-col>
					<v-col md="4" sm="2">
						<div class="service__item">
							<div class="service__item__icon">
								<v-icon class="outline-storage"></v-icon>
							</div>
							<div class="service__item__title">網站代管營運</div>
						</div>
					</v-col>
					<v-col md="4" sm="2">
						<div class="service__item">
							<div class="service__item__icon">
								<v-icon class="outline-widgets"></v-icon>
							</div>
							<div class="service__item__title">容器化解決方案</div>
						</div>
					</v-col>
				</v-row>
			</section>
		</div>
	</div>
</template>
<script>
export default {
	data: () => ({
	}),
	destroyed() {
	},
	created() {

	},
	methods: {

	}
};
</script>