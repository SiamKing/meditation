# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



icons = ["app/assets/images/guided_icon.png", "app/assets/images/mantra_icon.png", "app/assets/images/meta_icon.png"]

meditation_names = ["Mindfulness", "Zen Meditation", "Metta (Loving-Kindness)"]

traditions = ["Western", "Chinese Zen Buddhism", "Buddhism"]

meditation_about = ["Although Vipassana is synonymous with “Mindfulness” meditation, some people consider them to be slightly different. Many consider the practice of Mindfulness to be an adaptation of Vipassana, keeping certain aspects without a religious influence. This type of practice is also sometimes referred to as MBSR (Mindfulness-Based Stress Reduction) due to the fact that westerners are using it solely to reduce anxiety and stress.

The MBSR program was founded in 1979 at the University of Massachusetts by John Kabat-Zinn. It is supported by science as being beneficial for reducing stress, hence “stress reduction” in the name. Many consider mindfulness meditation (MBSR) to be among the most effective non-drug therapies for improving stress levels.", "The name “Zen” meditation translates to “seated meditation” and originated in Chinese Zen Buddhism. Historians trace the practice back to the 6th Century Indian monk “Bodhidharma.” The practice generally involves sitting in the Lotus Position and observing the breath. To tame the mind, awareness is generally focused on counting or watching the breath. Many individuals that practice this specific type of meditation sit on a cushion, chair, or padded mat.

In the “Soto” teachings of Zen, observing the mind is the primary focus. In the Soto-subtype, there is no focus on any object and the goal is for the meditator to become aware of their thoughts without judgment. This could be compared to “mindfulness” in that the individual acts as an observer. In some cultures, intensive “group meditations” are practiced in a process called “Sesshin.”

This type of meditation also uses what are referred to as “koans” which help the Zen student gain insight from the Zen master. They are also commonly used to test the progress of a Zen meditator. Koans may be solved through sitting meditation (Zen), but are sometimes solved during walking meditation (Kinhin).

", "This is a specific type of meditation that involves cultivating unconditional love and kindness towards other human beings. The practice of “metta” meditation is derived from Theravada Buddhism and is sometimes referred to as “compassion” meditation. There is scientific evidence in support of practicing metta for increased happiness, brain waves, and neural activity.

Metta is considered “love” without any sort of attachment and the goal is to increase “good will” towards others. If you were to practice this type of meditation, you’d start by directing feelings of unconditional love towards yourself. Once you were able to love yourself, you’d then expand those feelings and direct them towards others. This type of meditation may not be as popular as mindfulness, but has the ability to drastically improve mood when practiced correctly over the long-term."]

meditation_instructions = ["To practice mindfulness meditation, you simply focus on the present moment or life circumstance and pay attention to all emotions, physical sensations, and thoughts that you experience, without judgment. The efficacy of mindfulness stems from non-judgment and non-attachment. Like many forms of meditation, you sit comfortably, close your eyes, and focus on your breathing.

As you focus on breathing, you become distracted with sensations, thoughts, etc. Whenever you get distracted, you simply redirect your focus back to the breathing without getting frustrated. The more you practice this, the easier it will be to cope with stressors because you’re training your brain to avoid attachment and judgment to sensations and/or thoughts.

You don’t even necessarily need to sit with eyes closed to be “mindful.” You can practice mindfulness while you’re in a traffic jam, walking, out at the park, brushing your teeth, or eating. The practice simply helps you become increasingly aware and non-reactive to your consciousness. If you don’t want any sort of religious dogma attached to your meditative practice, this is the one to try.", " To practice Zen meditation, you’ll want to either find a mat, cushion, or sit on a chair in a cross-legged position. Although historically the practice involved sitting in a lotus or half-lotus, you can modify for comfort. Be sure to use good posture, keep the mouth closed and eyes lowered. Some sources suggest your gaze should be directed 3 feet in front of you on the ground.

Focus: To cultivate your focus, you can direct attention on your breath; flowing in and out through your nose. If necessary, you can count each breath to a count of 10 and then repeat. Counting helps some people focus. Each time your attention drifts, simply bring your attention back to the breath.
Observation: With this type of meditation, you don’t focus on anything, rather you focus on staying in the present moment, and simply observing your stream-of-consciousness thinking. You are aware of the thoughts flowing naturally through your head, but you aren’t judging them or reacting to them – just observing.
Kinhin (Walking): This is a type of meditation that involves walking, and is practiced between periods of the sitting (zazen) meditation. This type involves walking in a clockwise pattern around a room. Generally one hand is in a “fist” (or closed) while the opposite hand is covering the fist. During the walking meditation, one step is taken after each full breath. The speed of this form of meditation can be extremely slow or quicker (rivaling a slow-jog).", "To perform Metta meditation, you sit down in a comfortable position with eyes closed. You then use your mind (and heart) to create feelings of unconditional kindness and good-will towards yourself. It may take awhile to send and accept the feelings of kindness within yourself, but eventually you’ll get the hang of it.

After you’ve become adept at directing loving-kindness feelings toward yourself, you then pick a good friend (or family member) to direct these feelings towards. Once you’ve mastered directing these feelings toward a loved-one, you then pick a “neutral” person (possibly a stranger or acquaintance) to direct these feelings towards. As you continue, you will eventually direct feelings of loving-kindness towards a difficult person (or someone you dislike).

Eventually you’ll send simultaneous feelings of loving-kindness towards everyone including: yourself, a close friend, the neutral person, and the difficult person. Once you’ve figured that out, you then can send these feelings of loving-kindness towards the entire “universe.” The ultimate goal is to wish genuine “good-will,” peace, and happiness towards all beings.

When consistently practiced, feelings of pure “joy” will arise. Those who suffer from depression, negative thinking, and anger outbursts will significantly benefit from this type of meditation if practiced correctly. It is impossible to feel authentic loving-kindness (compassion) and anger at the same time. The more you practice this type, the more your “happiness” center within the brain is stimulated."]


counter = 0

3.times do
  Meditation.create(
  name: meditation_names[counter],
  icon: File.open(File.join(Rails.root, icons[counter])),
  instructions: meditation_instructions[counter],
  about: meditation_about[counter],
  tradition: traditions[counter]
  )
  counter += 1
end
