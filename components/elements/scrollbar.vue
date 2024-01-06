<template>
  <div>
    <nav class="navbar">
      <ul>
        <li v-for="(section, index) in sections" :key="index">
          <a :href="`#${section.id}`" :class="{ 'dot': true, 'active': activeSection === index }" :data-scroll="section.id">
            <!-- <span>{{ section.label }}</span> -->
          </a>
        </li>
      </ul>
    </nav>

    <!-- <section v-for="(section, index) in sections" :key="index" :id="section.id" class="sec">{{ section.label }}</section> -->
  </div>
</template>

<script>
export default {
  setup() {
    const sections = [
      { id: 'section1', label: 'section1'},
      { id: 'section2', label: 'section2'},
      { id: 'section3', label: 'section3' },
      { id: 'section4', label: 'section4' },
  
    ];

    const activeSection = ref(0);

    const handleScroll = () => {
      const links = document.querySelectorAll('.navbar a.dot');
      const top = window.scrollY;

      sections.forEach((section, index) => {
        const el = document.getElementById(section.id);
        if (el) {
          const height = el.offsetHeight;
          const offset = el.offsetTop - 150;

          if (top >= offset && top < offset + height) {
            links.forEach(link => link.classList.remove('active'));
            links[index].classList.add('active');
            activeSection.value = index;
          }
        }
      });
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      sections,
      activeSection
    };
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
.sec {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  color: #777;
  background: #f9f9f9;
  letter-spacing: 2px;
}

.sec:nth-child(odd) {
  background: #ddd;
}

.navbar {
  position: fixed;
  top: 46%;
  left: 10px;
  transform: translateY(-50%);
  z-index: 1000;
}

.navbar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar ul li {
  width: 30px;
  position: relative;
  text-align: right;
}

.navbar ul li .dot {
  color: #fff;
  display: block;
  padding: 25px 0;
}

.navbar ul li .dot span {
  display: inline-block;
  background: #f44336;
  letter-spacing: 1px;
  padding: 10px 25px;
  margin-right: 30px;
  border-radius: 3px;
  transform: translateX(30px);
  opacity: 0;
}

.navbar ul li:hover .dot span {
  transform: translateX(0px);
  opacity: 1;
}

.navbar ul li .dot span::before {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(7px, -50%);
  border-left: 7px solid #f44336;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  display: block;
}

.navbar ul li .dot::before,
.navbar ul li .dot::after {
  content: '';
  position: absolute;
  top: 50%;
  border-radius: 50%;
  display: block;
  transition: 0.2s ease-out;
}

.navbar ul li .dot::before {
  height: 5px;
  width: 5px;
  background-color: #EBEBEB;
  border: 2px solid #EBEBEB;
  right: 0;
  transform: translateY(-50%);
}

.navbar ul li .dot.active::before,
.navbar ul li:hover .dot::before {
  border-color: #0264F6;
  background: #0264F6;
}

.navbar ul li .dot::after {
  height: 15px;
  width: 15px;
  border: 2px solid #0264F6;
  right: -5px;
  transform: translateY(-50%) scale(0);
}

.navbar ul li .dot.active::after,
.navbar ul li:hover .dot::after {
  transform: translateY(-50%) scale(1);
}
</style>
