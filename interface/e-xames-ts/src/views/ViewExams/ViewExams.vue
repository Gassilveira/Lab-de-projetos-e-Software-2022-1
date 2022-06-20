<script src="./ViewExams.ts" lang="ts">
import Loading from "../../components/Loading/Loading.vue";
</script>
<style src="./ViewExams.css"></style>

<template>
  <Loading v-if="loading"></Loading>
  <div class="visualizao-exames-container" v-else>
    <div class="visualizao-exames-container2">
      <h1 class="visualizao-exames-text heading">Visualização de Exames</h1>
    </div>
    <div
      class="visualizao-exames-features mx-auto min-h-[88vh] rounded-md my-2"
    >
      <h1 class="visualizao-exames-text1">Lista de Exames</h1>
      <div class="flex flex-row gap-4 flex-wrap">
        <ViewExamsCard
          :url="exam.url"
          v-for="(exam, index) in exams"
          :key="index"
        >
          <template v-slot:clinic> {{ exam.clinic.name }} </template>
          <template v-slot:specialty> {{ exam.specialty }} </template>
          <template v-slot:desc>
            {{ exam.exam_desc }}
          </template>
        </ViewExamsCard>
      </div>
      <div class="self-end py-4" v-if="nextLoad != ''">
        <button @click="loadMore($event)">Carregar mais...</button>
      </div>
    </div>
  </div>
</template>
