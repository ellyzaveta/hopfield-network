package com.ai.hopfieldnetwork.services;

import com.ai.hopfieldnetwork.utils.MatrixUtil;

import java.util.List;
import java.util.Optional;

import static com.ai.hopfieldnetwork.utils.Constants.WEIGHT_MATRIX_DIMENSION;

public class HopfieldNetworkService {
    private static double[][] weights = new double[WEIGHT_MATRIX_DIMENSION][WEIGHT_MATRIX_DIMENSION];
    private final DataService dataset = new DataService();
    int i = 0;

    public void train(List<Integer> list) {

        double[][] inputVector = MatrixUtil.listToHorizontalMatrix(list);
        double[][] transposeVector = MatrixUtil.listToVerticalMatrix(list);
        double[][] multiplicationResult = MatrixUtil.multiply(transposeVector, inputVector);

        final double[][] result = MatrixUtil.multiplyByScalar(multiplicationResult, (1.0 / WEIGHT_MATRIX_DIMENSION));

        updateWeights(result);

        dataset.addItem(list);
    }

    private void updateWeights(double[][] result) {
        weights = MatrixUtil.sum(weights, result);
    }

    public Optional<List<Integer>> recognize(List<Integer> inputVector) {

        final double[][] multiplicationResult = MatrixUtil.multiply(weights, MatrixUtil.listToVerticalMatrix(inputVector));
        List<Integer> list = MatrixUtil.toList(multiplicationResult);

        Optional<List<Integer>> letter = dataset.findLetter(list);

        if (letter.isEmpty() && i < 10) {
            i++;
            return recognize(list);
        }

        i = 0;

        return letter;
    }

    public List<List<Integer>> getDataset() {
        return dataset.getDataset();
    }
}
