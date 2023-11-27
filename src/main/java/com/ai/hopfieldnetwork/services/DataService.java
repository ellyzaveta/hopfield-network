package com.ai.hopfieldnetwork.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public class DataService {

    private static final List<List<Integer>> dataset = new ArrayList<>();

    public void addItem(List<Integer> item) {
        dataset.add(item);
    }

    public Optional<List<Integer>> findLetter(List<Integer> item) {
        return dataset.stream()
                .filter(item::equals)
                .findFirst();
    }

    public List<List<Integer>> getDataset() {
        return dataset;
    }
}
