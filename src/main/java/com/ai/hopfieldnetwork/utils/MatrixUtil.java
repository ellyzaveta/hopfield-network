package com.ai.hopfieldnetwork.utils;

import java.util.ArrayList;
import java.util.List;

public class MatrixUtil {

    public static double[][] multiply(double[][] first, double[][] second) {
        double[][] result = new double[first.length][second[0].length];
        for (int i = 0; i < result.length; i++) {
            for (int j = 0; j < result[i].length; j++) {
                result[i][j] = multiplyCells(first, second, i, j);
            }
        }
        return result;
    }

    private static double multiplyCells(double[][] first, double[][] second, int row, int col) {
        double cell = 0;
        for (int i = 0; i < second.length; i++) {
            cell += first[row][i] * second[i][col];
        }
        return cell;
    }

    public static double[][] sum(double[][] first, double[][] second) {
        final double[][] matrix = getNewZeroMatrix(first.length, second[0].length);
        for(int i = 0; i < first.length; i++) {
            for(int j = 0; j < second[0].length; j++) {
                matrix[i][j] += first[i][j] ;
                matrix[i][j] += second[i][j];
            }
        }
        return matrix;
    }

    public static double[][] multiplyByScalar(double[][] matrix, double value) {
        final double[][] result = getNewZeroMatrix(matrix.length, matrix[0].length);
        for(int i = 0; i < matrix.length; i++) {
            for(int j = 0; j < matrix[i].length; j++) {
                result[i][j] = matrix[i][j] * value;
            }
        }
        return result;
    }

    private static double[][] getNewZeroMatrix(int rows, int columns) {
        double[][] result = new double[rows][columns];
        for(int i = 0; i < rows; i++) {
            for(int j = 0; j < columns; j++) {
                result[i][j] = 0;
            }
        }
        return result;
    }

    public static double[][] listToVerticalMatrix(List<Integer> list) {
        final double[][] matrix = getNewZeroMatrix(list.size(), 1);
        for(int i = 0; i < list.size(); i++) {
            matrix[i][0] = list.get(i);
        }
        return matrix;
    }

    public static double[][] listToHorizontalMatrix(List<Integer> list) {
        final double[][] matrix = getNewZeroMatrix(1, list.size());
        for(int i = 0; i < list.size(); i++) {
            matrix[0][i] = list.get(i);
        }
        return matrix;
    }

    public static List<Integer> toList(double[][] matrix) {
        List<Integer> list = new ArrayList<>();
        for (double[] doubles : matrix) {
            list.add(doubles[0] > 0 ? 1 : -1);
        }
        return list;
    }

}
