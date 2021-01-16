<template>
  <aside class="sidebar" :class="{ closed: !open }">
    <div class="sidebar__btn">
      <button @click="toggleSidebar"><ArrowIcon :rotate="!open" /></button>
    </div>

    <div class="sidebar__header">
      <div class="sidebar__logo">
        <Logo width="80" height="26" :hide="!open" />
      </div>
    </div>
    <div class="sidebar__menu">
      <ul>
        <li>
          <nuxt-link to="/profile"
            ><ProfileIcon /><span>Мой профиль</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/tasks"
            ><TaskIcon /><span>Список задач</span>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/statistic"
            ><StatisticIcon /><span>Статистика</span>
          </nuxt-link>
        </li>
      </ul>
      <ul class="sidebar__exit">
        <li @click="logout"><ExitIcon /> <span>Exit</span></li>
      </ul>
    </div>
  </aside>
</template>

<script>
import ProfileIcon from './ProfileIcon'
import TaskIcon from './TaskIcon'
import StatisticIcon from './StatisticIcon'
import ExitIcon from './ExitIcon'
import ArrowIcon from './ArrowIcon'
import Logo from './Logo'
import Button from './Button.vue'
export default {
  data: () => ({
    open: false,
  }),
  components: {
    Logo,
    ProfileIcon,
    TaskIcon,
    StatisticIcon,
    ExitIcon,
    ArrowIcon,
  },
  methods: {
    toggleSidebar() {
      this.open = !this.open
    },
    logout() {
      this.$store.dispatch('LOGOUT')
      this.$router.push('/login')
    },
  },
}
</script>

<style scoped lang='scss'>
.sidebar {
  width: 256px;
  height: 100%;
  background-color: #fff;
  padding: 24px 0 48px 56px;
  position: relative;
  transition: all 0.3s;

  @media screen and (max-width: 700px) {
    position: fixed;
    left: 0;
    top: 0;
    width: 295px !important;
    padding: 22px 0 48px 23px !important;
    span {
      display: block !important;
    }

    &__logo {
      padding-left: 72px;
    }

    svg {
      margin-right: 23px !important;
    }

    &__btn {
      display: none;
    }
  }

  &__btn {
    position: absolute;
    top: 20px;
    right: -20px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 0 1px $colorGray2;
    cursor: pointer;
    z-index: 10;
    transition: 0.3s;

    &:hover {
      transition: 0.3s;
      box-shadow: 0px 2px 1px 2px $colorGray2;
    }

    button {
      background: #fff;
      border: none;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      &:focus {
        outline: none;
      }
    }
  }

  &__logo {
    margin: 0 0 35px;
    display: block !important;
  }

  &__menu {
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ul {
      li {
        color: $colorBlack;
        margin: 0 0 24px;
        font-size: 14px;
        font-weight: 500;

        span {
          display: inline;
          white-space: nowrap;
        }

        svg {
          margin-right: 8px;
        }

        &:hover {
          color: $colorRed;

          svg {
            fill: $colorRed;
          }
        }

        a {
          display: flex;
          align-items: center;
        }
      }
    }
  }

  &__exit {
    cursor: pointer;
    color: $colorGray;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 0 !important;
    }
  }

  &.closed {
    padding-left: 23px;
    padding-right: 23px;
    width: 74px;
    transition: all 0.5s;

    span {
      display: none;
    }

    svg {
      margin: 0;
    }
  }
}
</style>