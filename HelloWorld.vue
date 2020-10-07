<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1> :) </h1>
      </v-col>

      <v-col cols="12">
        <h3>Part 1</h3>
        <p>
          Write a component <b>Palindrom.vue</b> with a single input field that checks if the input is a palindrom, like:
        </p>
        <label for="">Check Palindrom: </label>
        <input
                placeholder="Check words here"
                type="word"
                @input="checkerIsPalindroms"
                v-model="word"
        >

       <h3> {{checkerIsPalindroms}}</h3>
        <h3>{{getPalindrome}}</h3>

        <img src="/images/palindrom.png" />
      </v-col>

      <v-col cols="12">
        <h3>Part 2</h3>
        <p>
          - Write a component <b>GroupBy.vue</b> that displays the aggregated values returned by <b>getData()</b> located in <b>/api/index.ts</b>, like:
          <pre>

          <h3 v-for="(key) in arrayTest" v-bind:key="key">
            | {{ key.key }} | {{ key.value }} |
          </h3>

            | a | 3 |
            | b | 2 |
            | c | 1 |
          </pre>
          - How could this be accomplished using SQL: SELECT ...
        </p>
      </v-col>

        <v-col cols="12">
          <h3>Part 3</h3>
          <p>
            Write your own sorting algorithm that takes <b>values: {{ values }}</b> and sorts them:<br>
            {{ sort(values) }}
          </p>
          <h3>New sorting values: {{sortNew(values)}}</h3>

        </v-col>

        <v-col cols="12">
          <h3>Part 4</h3>
          <p>
            Display a list of palindroms that the user entered in <b>Palindrom.vue:</b><br>
          </p>
          <h3>{{ palindroms }}</h3>
        </v-col>

        <v-col cols="12">
        <h3>Part 5</h3>
        <p>
          Use <b>jest</b> to test the <b>Palindrom.vue</b> component.
        </p>
          <p hidden>{{mapApi}}</p>
        </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, } from 'vue-property-decorator'
import { getData } from '@/api/index'


@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  //Question 1 palindroms
  public palindroms: string[] = []

  public word = ''

  get checkerIsPalindroms (){
    const word = this.word

    for (let i = 0; i < word.length/2; i++) {
      if (word[i] !== word[word.length - 1 - i]) {
        return false
      }
    }
    return true
  }

  //Question 2
  public arrayTest: any [] = []

  get mapApi() {
    const map =  getData()
            .then( valueMap => {
              const r = valueMap.map( valueData => {
                // console.log(valueData)
                this.arrayTest.push(valueData)
              })
            })
            .catch(error => {
              console.log('rejected', error)
            })
    return  map
  }

  //quenstion 3
  public values = [ 1, 3, 1, 5, 8, 7, 9, 7 ]

  public sort(values: number[]) {
    return [...values].sort()
  }
  //new function using slice, sort
  public sortNew (values: number[]) {
    return values.slice().sort()
  }
  //Question 4
  get getPalindrome () {
    const add = this.palindroms
    const word = this.word
    if(this.checkerIsPalindroms == true && word.length >= 3){
      this.palindroms.push(word)
    } else {
      return this.palindroms
    }
    console.log(add)
    return add
  }
  //Question 5  --- I tried to test npm run test functions but it was not working, and I did not know if I should modify test files :/







}

</script>
