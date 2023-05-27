<script>
export default {
  data() {
  	return {
	    parentMessage: 'Parent',
    	items: [{ message: 'Foo' }, { message: 'Bar' }]
  	}
	}
}
</script>

<template>
	<li v-for="(item, index) in items">
  	{{ parentMessage }} - {{ index }} - {{ item.message }}
	</li>
</template>