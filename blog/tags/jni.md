## [ApiGear on Android: Bridging Unreal Engine and Java with Generated JNI](/blog/unreal-android-jni-bridge.md)

April 30, 2026 ·

<!-- -->

11 min read

![Wolfgang Bremer](https://avatars.githubusercontent.com/u/11640828?v=4)

Wolfgang Bremer

Co-Founder

[](https://github.com/w4bremer "GitHub")

You already have an Android app. It owns the data — vehicle telemetry, sensor state, transactional records — and exposes it through a Java or Kotlin service layer. Now product wants a richer surface on top: a 3D instrument cluster, an operator dashboard, a kiosk experience that needs more than the standard Android UI toolkit gives you. The natural answer is to add an Unreal Engine app as a rendering tier — a second process that draws the HMI and reaches back into your existing Java service for the data it visualizes.

That's a cross-process Android problem with a Java service host on one end and a C++ engine consumer on the other. Bind a `Service`, write a `Messenger` handler, define a `Parcelable` for every payload, hand-roll a JNI surface so the engine's C++ can call into the Java client, then keep the method signatures in sync forever. ApiGear's new [Java template](/template-java/docs/intro.md) ships the Android counterpart to the Unreal Engine template's new [JNI feature](/template-unreal/docs/features/jni.md), which generates both a JNI client (for consuming an Android service) and a JNI adapter (for exposing one). Define your interface once, generate both sides, and the Messenger plumbing, parcels, and JNI bindings appear together. This post walks through the realistic case — *Android app hosts the service, UE app consumes it* — and shows what comes out of the generator.

**Tags:**

* [unreal](/blog/tags/unreal.md)
* [android](/blog/tags/android.md)
* [java](/blog/tags/java.md)
* [jni](/blog/tags/jni.md)
* [ipc](/blog/tags/ipc.md)

[**Read more**](/blog/unreal-android-jni-bridge.md)
