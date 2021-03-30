<!-- 组件说明 -->
<template>
  <el-container style="height:100%">
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
    components: {},
    data() {
        return {}
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
    methods: {}
}
</script>

<style scoped>
.el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
.el-header{
    background-color: #06f;
    color: #fff;
}
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
</style>
