<template>
  <h1>User List</h1>
  <ul>
    <li v-for="user in users" :key="user.id">
      <span class="span-li">
        <span><img :src="user.avatar" alt=""></span>
        <span>{{ user.first_name }}</span>
      </span>
      <span class="span-li">
        <a href=""><router-link :to="`/user/${user.id}`">View Details</router-link></a>
      </span>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home-1',
  data() {
    return {
      users: ''
    }
  },
  methods: {
    async getUsers() {
      const result = await axios.get('https://reqres.in/api/users?page=1');
      // console.log(result)
      this.users = result.data.data
      // console.log(this.users)
    }
  },
  mounted() {
    this.getUsers();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  /* list-style-type: none; */
  padding: 0;
}

li {
  display: flex;
    justify-content: space-between;
    width: 75%;
    margin: auto;
    align-items: center;
    background: #ccedfa;
    margin-bottom: 20px;}
a {
  color: #42b983;
}

img {
  border-radius: 50%;
}

span{
  padding: 20px;
  font-size: 25px;
}

.span-li{
  display: inline-flex;
  align-items: center;
}

@media screen and (min-width: 1000px) {
  li {
    width: 800px;
  }
}
</style>
