<template>
  <div id="git">
    <GithubSearch/>
    <GithubList/>
  </div>
</template>

<script>
    import GithubSearch from './components/GithubSearch.vue'
    import GithubList from './components/GithubList.vue'

    export default {
        name:'App',
        components:{
            GithubSearch,
            GithubList
        }
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    #git{
        width: 70%;                                                                     
        margin: 0 auto;
    }
    ul{
        list-style: none;
    }
</style>