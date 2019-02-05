const bodyMuscles = {
    common: ["foot", "tibialis anterior"],
    calves: ["gastrocnemius"],
    thighs: ["vastus medialis", "rectus femoris", "sartorius", "gracilis", "latae", "biceps femoris", "adductor magnus"],
    forearmWrist: ["wrist", "wrist extensors", "wrist flexors"],
    ABS: ["rectus abdominis", "external oblique"],
    biceps: ["biceps brachii"],
    chest: ["pectoralis major"],
    shoulders: ["deltoids"],
    back: ["trapezius", "teres major", "latissimus dorsi"],
    SmallOfBack: ["musculus erector spinae"],
    buttocks: ["gluteus maximus"],
    triceps: ["triceps brachii"],
};

const musclesToIdMap = {
  front: {
    "external oblique": ['path4625', 'path4631'],
    "foot": ['path4679', 'path4685'],
    "tibialis anterior": ['path4677', 'path4683'],
    "gastrocnemius": ['path4675', 'path4681'],
    "vastus medialis": ['path4673', 'path4667'],
    "rectus femoris": ['path4649', 'path4659'],
    "sartorius": ['path4651', 'path4657'],
    "gracilis": ['path4653', 'path4655'],
    "latae": ['path4647', 'path4665'],
    "wrist": ['path4619', 'path4623'],
    "wrist extensors": ['path4617', 'path4621'],
    "rectus abdominis": ['path4645', 'path4643', 'path4639', 'path4637', 'path4633', 'path4635', 'path4629', 'path4627'],
    "biceps brachii": ['path4663', 'path4661'],
    "pectoralis major": ['path4603', 'path4601'],
    "deltoids": ['path4613', 'path4609'],
    "trapezius": ['path4605', 'path4607'],
  },
  back: {
    "foot": ['path4699', 'path4697'],
    "gastrocnemius": ['path4689', 'path4691', 'path4693', 'path4695'],
    "biceps femoris": ['path4745', 'path4747', 'path4753', 'path4755'],
    "adductor magnus": ['path4749', 'path4751'],
    "wrist": ['path4701', 'path4707'],
    "wrist flexors": ['path4703', 'path4705'],
    "deltoids": ['path4711', 'path4709'],
    "trapezius": ['path4729', 'path4719', 'path4713', 'path4715'],
    "teres major": ['path4769', 'path4723'],
    "latissimus dorsi": ['path4731', 'path4721'],
    "musculus erector spinae": ['path4727', 'path4725'],
    "gluteus maximus": ['path4759', 'path4757'],
    "triceps brachii": ['path4761', 'path4767'],
  },
}

const colors = {
  red: '#f00',
  green: '#0f0',
  blue: '#00f',
  black: '#000',
  white: '#fff',
};

const sides = {
  back: 'back',
  front: 'front',
};

export { bodyMuscles, colors, musclesToIdMap, sides };