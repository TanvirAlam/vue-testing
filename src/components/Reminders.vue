<template>
<div>
    <input class="new-reminder" v-model="newReminder">
    <button @click="add">Add Reminder</button>

    <ul v-if="reminders.length">
        <li v-for="reminder in reminders" :key="reminder">

            {{ reminder }}

            <button @click="removeReminder(reminder)" class="delete"></button>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      newReminder: "",
      reminders: []
    };
  },

  methods: {
    add() {
      this.reminders.push(this.newReminder);
      this.newReminder = "";
    },

    removeReminder(reminder) {
      this.reminders.splice(reminder, 1);
    }
  }
};
</script>
