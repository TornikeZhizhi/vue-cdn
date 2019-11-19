<template>
  <div>
    <ul>
      <li
        @click="changeServer(value.serverId,value.serverInfo)"
        v-for="(value, index) in servers"
        :key="index"
      >#{{ index }} Server and Status is {{ value.serverStatus }}</li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from "../../main.js";

export default {
  props: ["serverPropIndex", "serverPropStatus"],

  data: function() {
    return {
      servers: [
        {
          serverId: "14",
          serverStatus: "Normal",
          serverInfo: "Server Status is Normal"
        },
        {
          serverId: "134",
          serverStatus: "Critikal",
          serverInfo: "Server Status is Critikal"
        },
        {
          serverId: "294",
          serverStatus: "Failed",
          serverInfo: "Server Status is Failed"
        },
        {
          serverId: "231",
          serverStatus: "Succes",
          serverInfo: "Server Status is Succes"
        }
      ]
    };
  },
  methods: {
    changeServer(arg, arg2) {
      var srvIndex = this.serverPropIndex;
      var srvStatus = this.serverPropStatus;
      srvIndex = arg;
      srvStatus = arg2;
      eventBus.changeServerStatus(srvIndex, srvStatus);
    }
  }
};
</script>

<style scoped>
div {
  flex: 0 0 50%;
  max-width: 50%;
}
ul {
  padding: 10px 0 0 50px;
}
li {
  font-size: 30px;
  list-style-type: none;
  padding: 20px 20px 10px;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.4s;
}

li:hover {
  opacity: 1;
}

li:nth-child(odd) {
  background-color: #ccc;
}
li:nth-child(even) {
  background-color: antiquewhite;
}
</style>
