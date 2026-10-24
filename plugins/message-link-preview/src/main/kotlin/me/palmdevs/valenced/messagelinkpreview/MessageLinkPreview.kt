@file:JvmName("MessageLinkPreview")

package me.palmdevs.valenced.messagelinkpreview

import app.valenced.bridge.asDelegate
import app.valenced.plugins.plugin
import app.valenced.xposed.api.registerNativeMethod

@Suppress("UNUSED")
val messageLinkPreview = plugin {
    var hooks: PreviewHooks? = null

    start {
        hooks = PreviewHooks(dexFinder)

        registerNativeMethod("palmdevs.message-link-preview.put") { args ->
            val json by args.asDelegate().string()
            hooks?.put(json)
            null
        }

        registerNativeMethod("palmdevs.message-link-preview.clear") {
            hooks?.clear()
            null
        }

        registerNativeMethod("palmdevs.message-link-preview.setMaxHeight") { args ->
            val dp by args.asDelegate().int()
            hooks?.maxHeightDp = dp
            null
        }

        registerNativeMethod("palmdevs.message-link-preview.setInteractive") { args ->
            val enabled by args.asDelegate().boolean()
            hooks?.setInteractive(enabled)
            null
        }
    }

    stop {
        hooks?.dispose()
        hooks = null
    }
}
