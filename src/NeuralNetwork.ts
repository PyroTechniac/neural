export default class NeuralNetwork {
    static get trainDefaults() {
        return {
            beta1: 0.9,
            beta2: 0.999,
            callback: null,
            callbackPeriod: 10,
            epsilon: 1e-8,
            errorThresh: 0.005,
            iterations: 20000,
            learningRate: 0.3,
            log: false,
            logPeriod: 10,
            momentum: 0.1,
            praxis: null,
            timeout: Infinity
        };
    }

    static get defaults() {
        return {
            activation: 'sigmoid',
            binaryThresh: 0.5,
            hiddenLayers: null,
            leakyReluAlpha: 0.01
        };
    }
}