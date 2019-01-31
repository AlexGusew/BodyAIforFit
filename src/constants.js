const bodyMuscles = {
  front: {
    common: ["foot", "tibialis anterior"],
    calves: ["gastrocnemius"],
    thighs: ["vastus medialis", "rectus femoris", "sartorius", "gracilis", "latae"],
    forearmWrist: ["wrist", "wrist extensors"],
    ABS: ["rectus abdominis"],
    biceps: ["biceps brachii"],
    chest: ["pectoralis major"],
    shoulders: ["deltoids"],
    back: ["trapezius"],
  },
  back: {
    common: ["foot"],
    calves: ["gastrocnemius"],
    thighs: ["biceps femoris", "adductor magnus"],
    forearmWrist: ["wrist", "wrist flexors"],
    shoulders: ["deltoids"],
    back: ["trapezius", "teres major", "latissimus dorsi"],
    SmallOfBack: ["musculus erector spinae"],
    buttocks: ["gluteus maximus"],
    triceps: ["triceps brachii"],
  },
};

const musclesToIdMap = {
  front: {
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

  },
}

const colors = {
  red: '#f00',
  green: '#0f0',
  blue: '#00f',
  black: '#000',
  white: '#fff',
};

export { bodyMuscles, colors, musclesToIdMap };