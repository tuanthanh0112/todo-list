<template>
    <div class="container w-100 m-auto text-center mt-3">
        <h1 class="text-danger">To do list</h1>
        <add-item-form v-on:reloadlist="getItems()" />
    </div>
    <div class="container">
        <list-view
            :items="items"
            v-on:reloadlist="getItems()"
            class="text-center"
        />
    </div>
    <!-- <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Title</div>
                </div>
                <div class="card-body">
                    info
                </div>

            </div>
        </div>
    </div> -->
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
import listView from './listView.vue';
import addItemForm from './AddItemForm.vue'
export default {
    components:{
        addItemForm,
        listView
    },
    data: function(){
        return {
            items:[]
        }
    },
    methods:{
        getItems(){
            axios
                    .get("api/items")
                    .then(res => {
                        this.items = res.data;
                    })
                    .catch(error => {
                        console.log(error);
                    });
        }
    },
    created(){
        this.getItems();
    }
}
</script>
