<script lang="ts">

	import workerUrl from 'pdfjs-dist/build/pdf.worker.min.js?url';
	import { setWorkerSrc } from 'svelte-pdfjs';
	import { Button } from '@svelteuidev/core';
	import FileSaver from "file-saver";
	setWorkerSrc(workerUrl);

	import { base } from '$app/paths';

	import { Document, Page, preferThisHeight, type MultipleOf90 } from 'svelte-pdfjs';

	let scale = 1.4;
	let num = 1;
	export let filename;
	let max_pages = 1;
	let renderTextLayer = true;
	let target_height = 500;
	let rotation: MultipleOf90 = 0;

	let sizing = 1;

	const download_pdf = (fileURL) => {
		let fileName = fileURL.substring(fileURL.lastIndexOf("/") + 1);
		FileSaver.saveAs(fileURL, fileName);
	};

	function next_page(){
		num += 1;
	};

	function previous_page(){
		num -= 1;
	}

//   }

</script>

<section class="settings style=padding-bottom:1rem">
<div style="width:100%; display:flex; justify-content: space-between;">
	<div style="display:flex;">
	Page <input type="number" bind:value={num} step="1" min="1" max={max_pages} /> of {max_pages}
	</div>

  	<div style="display:inline-block">
	
		<div  style="display:inline-block;width:130px;max-width:130px">
			{#if num > 1}
				<Button class='previous-page' color="violet" on:click={previous_page}>
					previous page
				</Button> 
			{/if}
		</div>

		<div  style="display:inline-block;width:130px;max-width:130px">
			{#if num < max_pages}
				<Button class='next-page' color="violet" on:click={next_page}>
					next page
				</Button> 
			{/if}
		</div>

	</div>


    <Button class='download-button' variant='gradient' on:click={()=>download_pdf(filename)}>
      Download
    </Button> 

</div>

</section>

	<Document
		
    file={filename}
    
		loadOptions={{ docBaseUrl: base }}
		on:loadsuccess={(e) => {
			max_pages = e.detail.numPages;
			num = Math.min(num, max_pages);
		}}
		on:loaderror={(e) => alert(e.detail + '')}
	>
		<div>
			<Page
				{scale}
				{num}
				{renderTextLayer}
				{rotation}
				getViewport={sizing === 1 ? undefined : preferThisHeight(target_height)}
			/>
		</div>
	</Document>


<style>

	div {
		display: grid;
		place-items: center;
    /* position: absolute; */
    /* left: 0px; */
	}
</style>