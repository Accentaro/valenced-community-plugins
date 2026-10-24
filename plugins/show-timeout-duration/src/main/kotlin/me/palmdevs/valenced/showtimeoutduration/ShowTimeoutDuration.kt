@file:JvmName("ShowTimeoutDuration")

package me.palmdevs.valenced.showtimeoutduration

import app.valenced.bridge.asDelegate
import app.valenced.plugins.plugin
import app.valenced.xposed.api.registerNativeMethod

/** Shows the time left on a member's timeout above their messages, counting down. */
@Suppress("UNUSED")
val showTimeoutDuration = plugin {
    var hooks: TimeoutHooks? = null

    start {
        hooks = TimeoutHooks(dexFinder)

        registerNativeMethod("palmdevs.timeout.colors") { args ->
            hooks?.setColors((args[0] as Number).toInt(), (args[1] as Number).toInt())
            null
        }

        registerNativeMethod("palmdevs.timeout.put") { args ->
            val json by args.asDelegate().string()
            hooks?.put(json)
            null
        }

        registerNativeMethod("palmdevs.timeout.clear") {
            hooks?.clear()
            null
        }
    }

    stop {
        hooks?.dispose()
        hooks = null
    }
}
