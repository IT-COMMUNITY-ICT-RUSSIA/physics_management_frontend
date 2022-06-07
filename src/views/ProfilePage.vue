<template>
  <div class="container">
    <Navbar />
    <span v-if="!currentUser" class="text-center">
      <h2>Войдите, чтобы просмотреть информацию о своем профиле</h2>
    </span>
    <span v-else class="row">
      <p class="h-custom">
        Профиль студента. {{ currentUser.full_name }} Группа
        {{ currentUser.group }}
      </p>
      <section class="row">
        <p>
          Ваши достижения на курсе: Общая физика (Лек: Курашова С.А., Прак:
          Шишкин И.И.)
        </p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ЛР</th>
              <th scope="col">№1</th>
              <th scope="col">№2</th>
              <th scope="col">№3</th>
              <th scope="col">№4</th>
              <th scope="col">№5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Оценка</th>
              <td>3/5</td>
              <td>3/5</td>
              <td>1/5</td>
              <td>5/5</td>
              <td>5/5</td>
            </tr>
            <tr>
              <th scope="row">Преподаватель</th>
              <td>Курашова С.А.</td>
              <td>Курашова С.А.</td>
              <td>Шишкин И.И.</td>
              <td>Шишкин И.И.</td>
              <td>Шишкин И.И.</td>
            </tr>
            <tr>
              <th scope="row">Замечания</th>
              <td colspan="2">
                Работа сдана в <br />
                рамках ППА
              </td>
              <td>
                Работа списана у<br />
                Тимофеева Н.А.
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="row">
        <p class="h-custom">История посещений виртуальной лаборатории:</p>
        <table
          class="table table-borderless table-hover text-center align-middle"
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Установка</th>
              <th scope="col">Дата</th>
              <th scope="col">Напарник</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Установка №1</td>
              <td>10 май 22, 17:00</td>
              <td><user-avatar :size="'60'" :isu-number="'307526'" /></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Установка №3</td>
              <td>17 май 22, 10:00</td>
              <td><user-avatar :size="'60'" :isu-number="'247866'" /></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Установка №12</td>
              <td>1 июнь 22, 15:00</td>
              <td><user-avatar :size="'60'" :isu-number="'312315'" /></td>
            </tr>
          </tbody>
        </table>
      </section>
    </span>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import UserAvatar from "../components/UserAvatar.vue";

export default {
  components: {
    Navbar,
    UserAvatar,
  },
  data() {
    return {
      currentUser: JSON.parse(localStorage.getItem("user")),
    };
  },
};
</script>

<style>
.h-custom {
  color: var(--main-font-color);
  font-size: 24px;
}
.sub-h {
  color: var(--main-font-color);
  font-size: 16px;
}
.inactive {
  color: var(--primary-color-gray);
  text-decoration: none;
}
.description {
  color: var(--primary-color-gray);
}
#active {
  color: var(--primary-color-red);
  text-decoration: none;
}
.btn-secondary {
  color: var(--primary-color-dark-gray);
  background-color: var(--primary-color-light-gray) !important;
}

#logo-itmo {
  width: 150px;
  align-content: right;
}
</style>
