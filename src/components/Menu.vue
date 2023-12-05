<template>
  <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
  >
    <el-sub-menu index="1">
      <template #title>综合排序</template>
      <el-menu-item index="1-1">人气优先</el-menu-item>
      <el-menu-item index="1-2">距离优先</el-menu-item>
      <el-menu-item index="1-3">价格优先</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="2">距离最近</el-menu-item>
    <el-menu-item index="3" >销量最高</el-menu-item>
    <el-sub-menu index="4">
      <template #title >筛选</template>
      <el-menu-item index="4-1">炸鸡汉堡</el-menu-item>
      <el-menu-item index="4-2">炒饭</el-menu-item>
      <el-menu-item index="4-3">奶茶</el-menu-item>
    </el-sub-menu>
  </el-menu>


</template>

<script lang="ts" setup>



const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
