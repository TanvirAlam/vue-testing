<template>
    <div>
        <!-- Viewing the question -->
        <div v-if="! editing">
            <h1 v-text="question.title"></h1>
            <div class="body" v-text="question.body"></div>

            <button id="edit" @click="editing = true">Edit</button>
        </div>
        <!-- Editng the question -->
        <div v-if="editing">
            <input type="text" name="title" v-model="form.title">
            <textarea name="body" v-model="form.body" cols="30" rows="10"></textarea>

            <button id="update" @click="update">Update</button>
            <button id="cancel" @click="cancel">Cancel</button>
        </div>
    </div>
</template>

<script>
export default {
  props: ["dataQuestion"],
  data() {
    return {
      question: this.dataQuestion,
      form: {
        title: this.dataQuestion.title,
        body: this.dataQuestion.body
      },
      editing: false
    };
  },
  methods: {
    cancel() {
      this.editing = false;
    },
    update() {
      this.question.title = this.form.title;
      this.question.body = this.form.body;
      this.editing = false;
    }
  }
};
</script>
