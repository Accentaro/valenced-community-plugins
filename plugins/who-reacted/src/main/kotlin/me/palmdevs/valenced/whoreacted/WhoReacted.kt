@file:JvmName("WhoReacted")

package me.palmdevs.valenced.whoreacted

import app.valenced.bridge.asDelegate
import app.valenced.plugins.plugin
import app.valenced.xposed.api.registerNativeMethod

@Suppress("UNUSED")
val whoReacted = plugin {
    var hooks: ReactionHooks? = null

    start {
        hooks = ReactionHooks(dexFinder)

        registerNativeMethod("palmdevs.who-reacted.put") { args ->
            val json by args.asDelegate().string()
            hooks?.put(json)
            null
        }

        registerNativeMethod("palmdevs.who-reacted.shown") {
            hooks?.shownKeys() ?: "[]"
        }

        registerNativeMethod("palmdevs.who-reacted.clear") {
            hooks?.clear()
            null
        }
    }

    stop {
        hooks?.dispose()
        hooks = null
    }
}
