<template>
    <div class="container">
    <header>
        <main-nav/>
        <slot name="header"></slot>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer>
        <slot name="footer"></slot>
    </footer>
    </div>
</template>