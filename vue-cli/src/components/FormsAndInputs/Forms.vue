<template>
  <div class="container">
    <app-switch v-model="dataSwitch"></app-switch>
    <form>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <h1>File a Complaint</h1>
          <hr />
          <div class="form-group">
            <label for="email">Mail</label>
            <input
              type="text"
              id="email"
              v-model="userData.email"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model="userData.password"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="number"
              id="age"
              v-model.lazy.number="userData.age"
              class="form-control"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label for="message">Message</label><br />
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea
            id="message"
            v-model="message"
            rows="5"
            class="form-control"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <div class="form-group">
            <label for="sendmail">
              <input
                v-model="sendMail"
                type="checkbox"
                id="sendmail"
                value="SendMail"
              />
              Send Mail
            </label>
            <label for="sendInfomail">
              <input
                v-model="sendMail"
                type="checkbox"
                id="sendInfomail"
                value="SendInfoMail"
              />
              Send Infomail
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
        >
          <label for="male">
            <input type="radio" v-model="gender" id="male" value="Male" />
            Male
          </label>
          <label for="female">
            <input type="radio" v-model="gender" id="female" value="Female" />
            Female
          </label>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group"
        >
          <label for="priority">Priority</label>
          <select id="priority" class="form-control" v-model="selectedPrior">
            <option
              v-for="(data, index) in prioritety"
              :key="index"
              :selected="data == 'medium'"
              >{{ data }}</option
            >
          </select>
        </div>
      </div>
      <hr />
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <button class="btn btn-primary">Submit!</button>
        </div>
      </div>
    </form>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail:{{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Age:{{ userData.age }}</p>
            <p>Message: {{ message }}</p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="(data, index) in sendMail" :key="index">{{ data }}</li>
            </ul>
            <p>Gender:{{ gender }}</p>
            <p>Priority:{{ selectedPrior }}</p>
            <p>Switched:{{ dataSwitch }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Switch from "./Switch.vue";
export default {
  data: function() {
    return {
      userData: {
        email: "",
        password: "",
        age: 27
      },
      message: "",
      sendMail: [],
      gender: "Male",
      prioritety: ["high", "medium", "low"],
      selectedPrior: "medium",
      dataSwitch: true
    };
  },
  components: {
    appSwitch: Switch
  }
};
</script>

<style></style>
