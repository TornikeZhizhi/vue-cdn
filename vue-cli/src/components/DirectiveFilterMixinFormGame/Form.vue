<template>
  <div>
    <form class="needs-validation" novalidate v-if="!dataHide">
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="validationTooltip01">First name</label>
          <input
            v-model="name"
            type="text"
            class="form-control"
            id="validationTooltip01"
            placeholder="First name"
            value
            required
          />
          <div class="valid-tooltip">Looks good!</div>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationTooltip01">password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="validationTooltip03"
            placeholder="password"
            value
            required
          />
          <div class="valid-tooltip">Looks good!</div>
        </div>

        <div class="col-md-4 mb-3">
          <label for="validationTooltipUsername">Username</label>
          <div class="input-group">
            <div class="input-group-prepend"></div>
            <input
              v-model="username"
              type="text"
              class="form-control"
              id="validationTooltipUsername"
              placeholder="Username"
              aria-describedby="validationTooltipUsernamePrepend"
              required
            />
            <div class="invalid-tooltip">Please choose a unique and valid username.</div>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="validationTooltip03">City</label>
          <input
            v-model="city"
            type="text"
            class="form-control"
            id="validationTooltip03"
            placeholder="City"
            required
          />
          <div class="invalid-tooltip">Please provide a valid city.</div>
        </div>
      </div>
      <div class="custom-control custom-radio">
        <input
          v-model="gender"
          type="radio"
          value="Male"
          class="custom-control-input"
          id="customControlValidation2"
          name="radio-stacked"
          required
        />
        <label class="custom-control-label" for="customControlValidation2">male</label>
      </div>
      <div class="custom-control custom-radio mb-3">
        <input
          v-model="gender"
          value="Female"
          type="radio"
          class="custom-control-input"
          id="customControlValidation3"
          name="radio-stacked"
          required
        />
        <label class="custom-control-label" for="customControlValidation3">female</label>
        <div class="invalid-feedback">More example invalid feedback text</div>
      </div>

      <div class="form-check">
        <input
          v-model="fruits"
          class="form-check-input"
          type="checkbox"
          name="exampleRadios"
          id="exampleRadios1"
          value="banana"
          checked
        />
        <label class="form-check-label" for="exampleRadios1">banana</label>
      </div>
      <div class="form-check">
        <input
          v-model="fruits"
          class="form-check-input"
          type="checkbox"
          name="exampleRadios"
          id="exampleRadios2"
          value="apple"
        />
        <label class="form-check-label" for="exampleRadios2">apple</label>
      </div>
      <div class="form-check">
        <input
          v-model="fruits"
          class="form-check-input"
          type="checkbox"
          name="exampleRadios"
          id="exampleRadios3"
          value="lemon"
        />
        <label class="form-check-label" for="exampleRadios3">lemon</label>
      </div>

      <select class="custom-select custom-select-lg mb-3" v-model="optionInfo">
        <template v-for="(data, id) in options">
          <option :key="id" v-if="id==0" disabled="true">select cattegory</option>
          <option :key="id" v-else>{{ data }}</option>
        </template>
      </select>
      <button @click.prevent="dataHide = true" class="btn btn-primary" type="submit">Submit form</button>
    </form>

    <div class="info" v-if="dataHide">
      <h3>name:{{ name }}</h3>
      <h3>surname:{{ username }}</h3>
      <h3>password:{{ password }}</h3>
      <h3>city:{{ city }}</h3>
      <h3>gender:{{ gender }}</h3>
      <h3>
        <span v-for="data in fruits" :key="data">
          {{ data }}
          <br />
        </span>
      </h3>
      <h3>role - {{ optionInfo }}</h3>

      <button @click.prevent="dataHide = !dataHide ">BACK</button>
    </div>
  </div>
</template>

<script>
import { formMixin } from "./form.js";
export default {
  mixins: [formMixin]
};
</script>

<style scoped>
.info {
  max-width: 700px;
  margin: 40px auto 50px;
}
form {
  max-width: 800px;
  margin: 20px auto 70px;
}

.form-check-label {
  margin-left: 15px;
}
</style>
