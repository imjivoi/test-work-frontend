<template>
  <section class="tasks">
    <h1>Список задач</h1>

    <div class="tasks__block">
      <p v-if="isLoading">Загрузка ...</p>

      <table style="width: 100%" v-else>
        <tr>
          <th>Задача</th>
          <th>Статус</th>
        </tr>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.title }}</td>
          <td>
            <label class="checkbox">
              <span class="checkbox__input">
                <input
                  type="checkbox"
                  name="checked"
                  :checked="task.completed ? true : false"
                />
                <span class="checkbox__control">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1.73 12.91l6.37 6.37L22.79 4.59"
                    />
                  </svg>
                </span>
              </span>
              <span class="radio__label" :class="{ checked: task.completed }"
                >Выполнено</span
              >
            </label>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    isLoading: true,
    tasks: [],
  }),

  async mounted() {
    const random = Math.floor(Math.random() * 30)
    this.tasks = await this.$axios.$get(
      `https://jsonplaceholder.typicode.com/todos?id_lte=${random}`
    )
    this.isLoading = false
  },
}
</script>

<style scoped lang='scss'>
.tasks {
  &__block {
    @include block;

    overflow: hidden;
    margin: 24px 0 50px;
    overflow-y: auto;
    table {
      border-collapse: collapse;

      tr {
        border-bottom: 1px solid #bababa;
      }
      th {
        color: #bababa;
        font-weight: 500;
        text-align: left;
        padding: 0 0 16px;
      }

      td {
        color: $colorBlack;
        font-size: 14px;
        font-weight: 500;
        padding: 16px 0;
      }
    }
    p {
      text-align: center;

      margin: 15px 0 0;
    }
  }
}

.checkbox {
  display: grid;
  grid-template-columns: min-content auto;
  grid-gap: 0.5em;
  font-size: 14px;
  color: #c2c2c2;

  .radio__label {
    &.checked {
      color: $colorGreen;
    }
  }
}

.checkbox__control {
  display: inline-grid;
  width: 1em;
  height: 1em;
  border-radius: 0.25em;
  border: 0.1em solid currentColor;

  svg {
    transition: transform 0.1s ease-in 25ms;
    transform: scale(0);
    transform-origin: bottom left;
  }
}

.checkbox__input {
  display: grid;
  grid-template-areas: 'checkbox';

  > * {
    grid-area: checkbox;
  }

  input {
    opacity: 0;
    width: 1em;
    height: 1em;

    &:focus + .checkbox__control {
      box-shadow: 0 0 0 0.05em #fff, 0 0 0.15em 0.1em currentColor;
    }

    &:checked + .checkbox__control svg {
      transform: scale(1);
      color: $colorGreen;
    }

    &:disabled + .checkbox__control {
      color: #c2c2c2;
    }
  }
}
</style>