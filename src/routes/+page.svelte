<script lang="ts">
    import Graph1 from "$lib/assets/Graph1.png";
    import Graph2 from "$lib/assets/Graph2.png";
</script>

<div class="bg-[#ECCE8E] h-screen">
    <h2 class="text-center text-5xl text-[#270722] font-forum pt-5">
        Project 2 Demo Site
    </h2>

    <div id="graphs" class="flex justify-center gap-10 pt-10">
        <img src={Graph1} alt="Graph 1" />
        <img src={Graph2} alt="Graph 2" />
    </div>

    <footer class="absolute bottom-2 w-full flex justify-center">
        <a
            href="https://github.com/Mio-Mahoney"
            class="text-2xl text-blue-500 hover:underline">Github</a
        >
    </footer>
</div>
