<template>
    <h1>User Details</h1>
    <div class="user-container">
        <div>
            <img :src="user.avatar" alt="avatar">
        </div>
        <div>
            <p id="name">{{user.first_name}} {{user.last_name}}</p>
        </div>
        <div>
            <!-- <span>Email:</span> -->
            <p>{{user.email}}</p>
        </div>
    </div>
    <div class="back-div">
        <a href=""><router-link to="/">Go Back</router-link></a>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    name: 'User-1',
    data(){
        return {
            user: ''
        }
    },
    async mounted(){
        const result = await axios.get(`https://reqres.in/api/users/${this.$route.params.id}`);
        // console.log(result.data.data)
        this.user = result.data.data
    }
}
</script>

<style scoped>
.user-container{
    background: #ccedfa;
    width: max-content;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 30px;
    height: 300px;
    border-radius: 20px;
}

p{
    font-size: 25px;
}

#name{
    font-weight: 700;
}

img{
    border-radius: 50%;
}

.back-div{
    margin-top: 20px;
}

.back-div a {
    text-decoration: none;
    background: #42b983;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 18px;
}
</style>