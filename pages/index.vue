<script>
import { defineComponent, ref, onMounted } from 'vue';
import HomePageContext from './HomePageContext';

export default defineComponent({
  name: 'HomeView',

  setup () {

    const displayNameRef = ref('Vo Chi Thanh');
    const context = HomePageContext.create({
      displayNameRef
    }).setupComponent();

    const images = ref([]);
    const isLoading = ref(true);

    const CLOUD_NAME = 'dqgn2mwuw';
    const TAG_NAME = 'gallery';

    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${TAG_NAME}.json`
        );

        if (!response.ok) {
          throw new Error(`Cloudinary responded with ${response.status}`);
        }

        const data = await response.json();
        const resources = data.resources ?? [];

        images.value = resources.map(res => ({
          public_id: res.public_id,
          url: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v${res.version}/${res.public_id}.${res.format}`,
          description: res.context?.custom?.caption ?? 'Không có mô tả'
        }));
      } catch (error) {
        console.error('Lỗi khi lấy ảnh từ Cloudinary:', error);
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(() => {
      fetchImages();
    });

    return {
      context,
      displayNameRef,
      images,
      isLoading,
      galleryTagName: TAG_NAME
    };
  }
});
</script>

<template>
  <div class="unit-home">
    <p class="greeting">
      {{ context.formatGreetingLine() }}
    </p>

    <p class="name">
      {{ displayNameRef }}
    </p>

    <div class="gallery-section">
      <h3 class="title">Danh sách ảnh (Từ Cloudinary)</h3>

      <div v-if="isLoading" class="loading">Đang tải ảnh...</div>

      <div v-else class="image-grid">
        <div v-for="img in images"
             :key="img.public_id"
             class="image-card">
          <div class="image-wrapper">
            <img :src="img.url" :alt="img.description" />
          </div>
          <p class="image-description">{{ img.description }}</p>
        </div>
      </div>

      <div v-if="!isLoading && images.length === 0" class="empty">
        Chưa có ảnh nào được gắn tag "{{ galleryTagName }}"
      </div>
    </div>
  </div>
</template>

<style scoped>

.unit-home {
  background-color: var(--background-color);
  padding-block: 1rem;
  padding-inline: 1rem;
}

.unit-home > .greeting {
  margin-block-end: 0.5rem;
}

.unit-home > .name {
  color: var(--color-brown);
  font-weight: bold;
  margin-bottom: 2rem;
}

.gallery-section {
  margin-top: 2rem;
  border-top: 1px solid #eee;
  padding-top: 1rem;
}

.title {
  margin-bottom: 1.5rem;
  color: #333;
}

.image-grid {
  display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.image-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.image-card:hover {
  transform: translateY(-5px);
}

.image-wrapper img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.image-description {
  padding: 12px;
  font-size: 0.9rem;
  color: #555;
  text-align: center;
  background: #f9f9f9;
  margin: 0;
}

.loading, .empty {
  text-align: center;
  padding: 2rem;
  color: #888;
}
</style>
