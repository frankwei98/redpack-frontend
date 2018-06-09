<template>
    <div id="my">
        <h1 class="title">My Red Pack</h1>
        <h2 class="subtitle"> You can manage your red pack sent before here. </h2>
        <el-table
            :data="myRedPack"
            stripe
            style="width: 100%">
            <el-table-column
                type="index"
                width="50"
                :index="id" />
            <el-table-column
            prop="time"
            label="Date"
            width="180">
            </el-table-column>
            <el-table-column
            prop="amount"
            label="Amount"
            width="180">
            </el-table-column>
            <el-table-column
            prop="qty"
            label="Quanity">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  data: () => ({
    myRedPack: [
      {
        id: 1,
        time: '2018/06/10',
        amount: 1919,
        qty: 100
      },
      {
        id: 1919,
        time: '2018/06/10',
        amount: 2919,
        qty: 300
      },
      {
        id: 19,
        time: '2018/06/10',
        amount: 919,
        qty: 10
      }
    ]
  }),
  methods: {
    handleClick (row) {
      console.log(row)
    }
  }
}
</script>
