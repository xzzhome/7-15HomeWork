<template>
  <div>
    <el-table :data="tableData" border stripe style="width: 100%">

      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="编号" width="150"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="phone" label="电话" width="180"></el-table-column>
      <el-table-column prop="email" label="邮件" width="230"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
    <!--current-change 页面改变时会触发
        totals 总数量  data 一个页面展示的数据  后端传过来的
        current-page 分页参数：当前页
        page-size 分页参数：每页个数-->
    <el-pagination background align="right" layout="prev, pager, next"
                   @current-change="pageChange"
                   :total="totals"
                   :current-page="currentPage"
                   :page-size="pageSize">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tableData: [],
      totals:0,
      currentPage:1,
      pageSize:5
    }
  },
  methods:{

    findAllStudent(){
      this.$http.post("/student/list",{currentPage:this.currentPage,pageSize:this.pageSize})
        .then((result)=>{
          this.tableData=result.data.data
          this.totals=result.data.totals
        }).catch((result)=>{
      })
    },

    pageChange(currentPage){
      this.currentPage=currentPage
      this.findAllStudent()
    }
  },
  mounted() {
    this.findAllStudent()
  }
}
</script>

<style scoped>

</style>
